export type MenuOption = { id: string; name: string; price: number; available: boolean; days: number[] };
export type OptionGroup = { id: string; name: string; instruction: string; min: number; max: number; weekly: boolean; initialized: boolean; options: MenuOption[] };
export type Product = { name: string; description: string; price: string; category: string; available: boolean; image: string };
export const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
export const money = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const option = (id: string, name: string, d: number[], price = 0): MenuOption => ({ id, name, days: d, price, available: true });
export const initialGroups: OptionGroup[] = [
 { id: 'size', name: 'Tamanho', instruction: 'Escolha o tamanho do seu prato', min: 1, max: 1, weekly: false, initialized: false, options: [option('small', 'Pequeno', [0,1,2,3,4,5,6]), option('large', 'Grande', [0,1,2,3,4,5,6], 8)] },
 { id: 'sides', name: 'Guarnições', instruction: 'Escolha seus acompanhamentos favoritos', min: 0, max: 5, weekly: true, initialized: true, options: [option('rice', 'Arroz', [0,1,2,3,4,5,6]), option('beans', 'Feijão', [0,2,3,4,5]), option('salad', 'Salada', [0,1,3,4,5,6]), option('pasta', 'Macarrão', [0,1,4,6]), option('beet', 'Beterraba', [2,3,5]), option('tomato', 'Tomate', [2,3,4,6])] },
 { id: 'meat', name: 'Tipo de carne', instruction: 'Escolha uma proteína para completar', min: 0, max: 1, weekly: true, initialized: true, options: [option('chicken', 'Frango', [0,3,5]), option('fish', 'Peixe', [0,4], 4), option('pork', 'Carne suína', [1,3]), option('beef', 'Carne bovina', [1,4,6], 5), option('roast', 'Frango assado', [2,5]), option('steak', 'Picanha', [2,6], 12)] },
];