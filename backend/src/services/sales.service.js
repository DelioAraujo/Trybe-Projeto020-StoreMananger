const { salesModel } = require('../models');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { status: 200, data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (!sale) {
    return { status: 404, data: { message: 'Sale not found' } };
  }
  return { status: 200, data: sale };
};

const createNewSale = async (body) => {
  const sale = await salesModel.saleProductCompleteData(body);
  return { status: 201, data: sale };
};

module.exports = {
  findAll,
  findById,
  createNewSale,
};

// const createNewSale = async (body) => {
//   let errorResponse = null;

//   // Validar cada item no corpo da requisição usando forEach
//   body.forEach((item) => {
//     if (!item.productId) {
//       errorResponse = { status: 400, data: { message: "\"productId\" is required" } };
//     } else if (!item.quantity) {
//       errorResponse = { status: 400, data: { message: "\"quantity\" is required" } };
//     } else if (item.quantity <= 0) {
//       errorResponse = { status: 422, data: { message: "\"quantity\" must be greater than or equal to 1" } };
//     }

//     // Aqui você faria a verificação para verificar se o productId existe no banco de dados
//     // e definir errorResponse com um status 404 se não existir.
//     // Exemplo hipotético:
//     const productExists = checkIfProductExists(item.productId);
//     if (!productExists) {
//       errorResponse = { status: 404, data: { message: "Product not found" } };
//     }
//   });

//   // Se houver um erro, retorne a resposta de erro
//   if (errorResponse) {
//     return errorResponse;
//   }

//   // Se todas as validações passarem, prosseguir com a inserção da venda.
//   const sale = await salesModel.saleProductCompleteData(body);
//   return { status: 201, data: sale };
// };

// // Função hipotética para verificar a existência do produto no banco de dados
// const checkIfProductExists = (productId) => {
//   // Faça uma consulta ao banco de dados para verificar se o produto existe.
//   // Retorne true se existir e false caso contrário.
// };
