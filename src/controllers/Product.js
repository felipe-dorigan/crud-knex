const Knex = require('../knexConfig');

module.exports = {
  async select(req, res) {
    const results = await Knex('construtora.tb_produto').select().catch((error) => {
      res.send(error.message);
    });

    res.json(results);
  },
  async insert(req, res) {
    const { product } = req.body;
    const { value } = req.body;

    const data = {
      "pro_descricao": product,
      "pro_valor_unitario": value
    }

    await Knex('construtora.tb_produto')
      .insert(data)
      .catch((error) => {
        res.send(error.message);
      });

    return res.status(201).send();
  },
  async update(req, res) {
    const { id } = req.params;
    const { product } = req.body;
    const { value } = req.body;

    const data = {
      "pro_descricao": product,
      "pro_valor_unitario": value
    }

    const codigo = {
      "pro_codigo": id
    }

    await Knex('construtora.tb_produto')
      .update(data)
      .where(codigo)
      .catch((error) => {
        res.send(error.message);
      });

    return res.send();
  },
  async delete(req, res) {
    const { id } = req.params;

    const codigo = {
      "pro_codigo": id
    }

    await Knex('construtora.tb_produto')
      .delete()
      .where(codigo)
      .catch((error) => {
        res.send(error.message);
      });

    return res.send();
  },
  async get(req, res) {
    const { id } = req.params;

    const codigo = {
      "pro_codigo": id
    }

    const results = await Knex('construtora.tb_produto')
      .where(codigo)
      .catch((error) => {
        res.send(error.message);
      });

    return res.json(results);
  }
}