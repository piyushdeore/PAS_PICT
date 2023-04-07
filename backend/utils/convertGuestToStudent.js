const checkGoodField = (field) => {
  return (
    field.localeCompare("_id") &&
    field.localeCompare("__v") &&
    field.localeCompare("createdAt") &&
    field.localeCompare("updatedAt")
  );
};

export default (attributes, guest) => {
  const student = {};
  attributes.forEach((field) => {
    if (checkGoodField(field)) {
      if (field.includes(".")) {
        const strs = field.split(".");
        console.log(strs);
        student[strs[0]] = {
          ...student[strs[0]],
          [strs[1]]: guest[strs[0]][strs[1]],
        };
      } else student[field] = guest[field];
    }
  });
  return student;
};
