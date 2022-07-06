// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

//function sendRequest(name, phone, address, goods, sum) {
  //  let data = {goods: [], order: {}};

  //  let countOfGoods = goods.length;

   // for (let i = 0; i <= countOfGoods; i += 1) {
   //     data.goods.push(goods[i].title);
   // }

    //data.order.address = address;
    //data.order.sum = name + phone + address + goods + sum;

    //data.client = 'Иван';

  //  let jsonData = JSON.stringify(data);

 //   return jsonData;
//}

function sendRequest(name, phone, address, goods, sum) {
    let data = {client: {name, phone}, order: {adress, sum}, goods: [({title, count})]};

    let client;
        client = data.name + data.phone;
   //console.log(client);

    //let order = {`adress`, `sum`};
    let adress = order.adress;
        adress = adress.street + adress.house + adress.entrance + adress.floor + adress.flat;
    let sum = order.sum;
    //console.log(adress);
    //console.log(sum);
    
    let length = goods.length;

    for (let i = 0; i < length; i += 1) {
        //let i = goods.i;
        data.goods.push(goods[i].title);
        data.goods.push(goods[i].count);
        //push(i);
        //console.log(goods[i].title);
        //console.log(goods[i].count);
    }

    let jsonData = JSON.stringify(data);

    return jsonData;
}