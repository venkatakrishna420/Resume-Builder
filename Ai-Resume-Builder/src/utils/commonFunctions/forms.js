const getInputType = (item) => {
  switch (item.type) {
    case "textarea": return "textarea";
    case "date": return "date";
    case "url": return "url";
    case "email": return "email";
    case "number": return "tel";
    default: return "text";
  }
};


export { getInputType }