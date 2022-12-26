export default function destructingCharacters(object) {
  const { special } = object;
  const result = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
