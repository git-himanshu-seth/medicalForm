export const initFormFieldValues = (fields) =>
  fields.reduce((acc, { name, type }) => {
    switch (type) {
      case "checkbox":
        acc[name] = [];
        break;
      default:
        acc[name] = "";
    }
    return acc;
  }, {});
