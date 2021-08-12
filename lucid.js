export const Lucid = {
  component: component,
  render: renderComponent,
  remove: removeComponent,
  instance: instance
}

const _Lucid = {
  /** @type {Object<number, Component>} */
  components: {},
  componentId: 0,
  /** @type {Object<number, {}>[]} */
  elements: []
}

/**
 * @typedef {object} Component
 * @property {number} id
 * @property {object} attributes 
 * @property {object} state 
 * @property {Object<string, function>} methods 
 * @property {Hooks} hooks 
 * @property {Object<string, (oldValue: any, newValue: any) => any} watch 
 * @property {object} props
 * @property {Skeleton} props.skeleton
 * @property {() => string} props.render 
 */

/**
 * @typedef {object} Hooks
 * @property {Function} [created]
 * @property {Function} [connected]
 * @property {Function} [disconnected] 
 * @property {Function} [updated]
 */

/**
 * @typedef {object} Skeleton
 * 
 * @property {string} tag
 * @property {Object.<string, string>} attrs
 * @property {Skeleton[]} children
 */

/**
 * 
 * @param {object} props
 * @param {object} props.attributes 
 * @param {object} props.state 
 * @param {Object<string, function>} props.methods 
 * @param {() => string} props.render 
 * @param {Hooks} props.hooks 
 * @param {Object<string, (oldValue: any, newValue: any) => any} props.watch 
 * @returns {Component}
 */
function component(props) {
  _Lucid.components[_Lucid.componentId] = {
    id: _Lucid.componentId,
    attributes: props.attributes,
    state: props.state,
    methods: props.methods,
    hooks: props.hooks,
    watch: props.watch,
    props: {
      skeleton: null,
      render: props.render
    }
  }

  // Initialize component in elements array
  _Lucid.elements[_Lucid.componentId] = {};

  return _Lucid.components[_Lucid.componentId++];
}

/**
 * 
 * @param {HTMLElement} dom 
 * @param {Component} component
 * @param {number} key 
 * @param {object} [attributes] 
 * @param {{first: boolean, last: boolean, index: number}} [settings] 
 */
function renderComponent(dom, component, key, attributes, settings) {
  // Check if component has it's skeleton created, if not, create it's skeleton
  if (_Lucid.components[component.id].props.skeleton === null) {
    const elem = document.createElement("div");
    elem.innerHTML = _Lucid.components[component.id].props.render().replace("src=", "srcname=");
    _Lucid.components[component.id].props.skeleton = createSkeleton(elem.firstElementChild);
  }

  _Lucid.elements[component.id][key] = Object.assign({}, {
    id: component.id,
    key: key,
    state: _Lucid.components[component.id].state,
    attributes: _Lucid.components[component.id].attributes,
    methods: {},
    watch: {},
    hooks: {},
    refs: {},
    children: [],
    dom: null,
    setState: function (value) {
      if (typeof value === "function")
        this.state = value(this.state);
      else if (typeof value === "object")
        this.state = value;

      updateComponent(this.dom, _Lucid.components[this.id].props.skeleton, this.id, this.key);

      // Call "updated" hook if exists
      _Lucid.elements[component.id][key].h_updated && _Lucid.elements[component.id][key].h_updated()
    }
  })

  for (const methodKey in _Lucid.components[component.id].methods) {
    _Lucid.elements[component.id][key]["m_" + methodKey] = _Lucid.components[component.id].methods[methodKey];
    _Lucid.elements[component.id][key].methods[methodKey] = (...args) => { _Lucid.elements[component.id][key]["m_" + methodKey](...args); }
  }
  for (const watchKey in _Lucid.components[component.id].watch) {
    _Lucid.elements[component.id][key]["w_" + watchKey] = _Lucid.components[component.id].watch[watchKey];
    _Lucid.elements[component.id][key].watch[watchKey] = (...args) => { _Lucid.elements[component.id][key]["w_" + watchKey](...args); }
  }
  for (const hooksKey in _Lucid.components[component.id].hooks) {
    _Lucid.elements[component.id][key]["h_" + hooksKey] = _Lucid.components[component.id].hooks[hooksKey];
    _Lucid.elements[component.id][key].hooks[hooksKey] = (...args) => { _Lucid.elements[component.id][key]["h_" + hooksKey](...args); }
  }

  // Find the parent of the current component that's being rendered
  let parentNode = dom;
  while (parentNode) {
    const parentId = dom.getAttribute("lucid-id");
    const parentKey = dom.getAttribute("lucid-key");
    if (parentId && parentKey) {
      _Lucid.elements[parentId][parentKey].children.push({ id: component.id, key: key });
      break;
    }
    parentNode = parentNode.parentElement;
  }

  // Over-write to default attributes if provided
  if (attributes) _Lucid.elements[component.id][key].attributes = attributes;

  // Call "created" hook if exists
  _Lucid.elements[component.id][key].h_created && _Lucid.elements[component.id][key].h_created()

  let elem = document.createElement("div");
  connectComponent(elem, _Lucid.components[component.id].props.skeleton, component.id, key);
  elem = elem.firstChild;

  // Render the component to the appropriate position
  if (!settings) {
    dom.appendChild(elem);
  } else {
    if (settings.first !== undefined) {
      if (dom.firstChild)
        dom.insertBefore(elem, dom.firstChild);
      else
        dom.appendChild(elem);
    } else if (settings.index) {
      dom.insertBefore(elem, dom.children[settings.index])
    }
    else
      dom.appendChild(elem)
  }

  // Set 2 lucid attributes, "lucid-id" and "lucid-key"
  elem.setAttribute("lucid-id", component.id);
  elem.setAttribute("lucid-key", key);

  // Set the dom of the element, since it has been connected
  _Lucid.elements[component.id][key].dom = elem;

  // Call "connected" hook if exists
  _Lucid.elements[component.id][key].h_connected && _Lucid.elements[component.id][key].h_connected()
}

/**
 * 
 * @param {HTMLElement} dom 
 * @param {Skeleton} skeleton 
 * @param {number} id 
 * @param {number} key 
 */
function connectComponent(dom, skeleton, componentId, componentKey) {
  // If skeleton is a string, it's a text node that is the only child
  if (typeof skeleton === "string") {
    const textNode = document.createTextNode(convertTextVariables(skeleton, componentId, componentKey));
    dom.appendChild(textNode);
    return;
  }

  const elem = document.createElement(skeleton.tag);

  for (const key in skeleton.attrs) {
    let result;

    if (key.startsWith("on")) {
      result = convertTextVariables(skeleton.attrs[key], componentId, componentKey, true);
      elem.addEventListener(key.substr(2), (ev) => { result(ev); });
    }
    else {
      result = convertTextVariables(skeleton.attrs[key], componentId, componentKey);
      elem.setAttribute(key.replace("srcname", "src"), result);
    }
  }

  for (let i = 0; i < skeleton.children.length; ++i)
    connectComponent(elem, skeleton.children[i], componentId, componentKey);

  dom.appendChild(elem);

  // Get "lucid-ref" attribute, if exists, set the ref of the dom on the element
  const ref = elem.getAttribute("lucid-ref");
  if (ref)
    _Lucid.elements[componentId][componentKey].refs[ref] = elem;

  // Get 2 lucid attributes, "lucid-id" and "lucid-key"
  const lucidId = elem.getAttribute("lucid-id");
  const lucidKey = elem.getAttribute("lucid-key");

  // If component id and key are present in the node, it's a lucid component
  if (lucidId || lucidKey) {
    const newElem = document.createElement("div");
    renderComponent(newElem, { id: lucidId }, lucidKey);
    dom.replaceChild(newElem.firstChild, elem);
  }
}

function updateComponent(dom, skeleton, componentId, componentKey) {
  if (typeof skeleton === "string") {
    const result = convertTextVariables(skeleton, componentId, componentKey);
    if (result !== dom.nodeValue) dom.nodeValue = result;
    return;
  }

  for (const key in skeleton.attrs) {
    // Only change the attributes that are not functions,
    // because only {{state.*}} attributes can change
    if (!key.startsWith("on")) {
      const result = convertTextVariables(skeleton.attrs[key], componentId, componentKey);
      if (dom.getAttribute(key) !== result) dom.setAttribute(key, result);
    }
  }

  const childNodes = Array.from(dom.childNodes);
  for (let i = 0; i < childNodes.length; ++i) {
    // Check also if there is a skeleton for the dom child
    if (skeleton.children[i]) {
      updateComponent(childNodes[i], skeleton.children[i], componentId, componentKey);
    }
  }
}

/**
 * 
 * @param {Component | number} component
 * @param {number} key 
 */
function removeComponent(component, key) {
  const id = typeof component === "number" ? component : component.id;

  const dom = _Lucid.elements[id][key].dom;

  // Remove the component from the DOM
  dom.parentNode.removeChild(dom);

  const childrenCount = _Lucid.elements[id][key].children.length;
  for (let i = 0; i < childrenCount; ++i) {
    const child = _Lucid.elements[id][key].children[i];
    removeComponent(child.id, child.key);
  }

  // Call "disconnected" hook if exists
  _Lucid.elements[id][key].h_disconnected && _Lucid.elements[id][key].h_disconnected();

  // Delete it from the elements
  delete _Lucid.elements[id][key];
}

function instance(component, key) {
  return {
    attribute: function (attribute, value) {
      if (typeof value !== "undefined") {
        const oldValue = _Lucid.elements[component.id][key].attributes[attribute];
        _Lucid.elements[component.id][key].attributes[attribute] = value;

        // Call watch function of the attribute if exists
        _Lucid.elements[component.id][key]["w_" + attribute] && _Lucid.elements[component.id][key]["w_" + attribute](oldValue, value);
      } else {
        return _Lucid.elements[component.id][key].attributes[attribute];
      }
    }
  };
}

/**
 * 
 * @param {HTMLElement} child 
 * @returns {Skeleton}
 */
function createSkeleton(child) {
  if (child.nodeType !== Node.ELEMENT_NODE) {
    const nodeValue = child.nodeValue.trim();

    if (nodeValue !== "")
      return nodeValue;

    return null;
  }

  const skeleton = {
    tag: child.tagName,
    attrs: {},
    children: []
  };

  // Set attributs of the html element
  for (let i = 0; i < child.attributes.length; ++i)
    skeleton.attrs[child.attributes[i].name] = child.attributes[i].value;

  // Loop through all child nodes of the html element, if not empty, add on to the children array
  const childNodes = Array.from(child.childNodes);
  for (let i = 0; i < childNodes.length; ++i) {
    const childSkeleton = createSkeleton(childNodes[i]);

    if (childSkeleton !== null)
      skeleton.children.push(childSkeleton);
  }

  return skeleton;
}

/**
 * 
 * @param {string} text 
 * @param {number} id 
 * @param {number} key 
 * @param {boolean} isEvent
 */
function convertTextVariables(text, id, key, isEvent) {
  let variables = [];

  let startIndex = text.indexOf("{{", 0);
  let endIndex = text.indexOf("}}", startIndex + 2);

  while (startIndex !== -1 && endIndex !== -1) {
    variables.push(text.substring(startIndex + 2, endIndex));

    startIndex = text.indexOf("{{", endIndex + 2);
    endIndex = text.indexOf("}}", startIndex + 2);
  }

  if (variables.length === 0) return text;

  for (let i = 0; i < variables.length; ++i) {
    const properties = variables[i].split(".");

    if (properties[0] === "attributes" || properties[0] === "state") {
      let tempObj = _Lucid.elements[id][key];
      for (let j = 0; j < properties.length; ++j)
        tempObj = tempObj[properties[j]];

      text = text.replace("{{" + variables[i] + "}}", tempObj);
    }
    else if (properties[0] === "methods") {
      if (isEvent)
        return _Lucid.elements[id][key]["m_" + properties[1]].bind(_Lucid.elements[id][key]);
      else
        return _Lucid.elements[id][key]["m_" + properties[1]]();
    }
  }

  return text;
}