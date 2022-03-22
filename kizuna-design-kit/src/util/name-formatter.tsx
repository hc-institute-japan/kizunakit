const nameFormatter = (name: string) => {
  const splittedNames = name?.split(' ');
  const firstLetter = splittedNames[0]?.substring(0, 1)?.toUpperCase();
  const secondLetter = splittedNames[splittedNames?.length - 1]?.substring(0, 1)?.toUpperCase();
  return firstLetter + secondLetter;
};

export default nameFormatter;
