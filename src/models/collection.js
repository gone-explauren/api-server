'use strict';

class Collection {
	constructor(model) {
		this.model = model
	}

	async read(id, options) {
		try {
			if (id) {
				return await this.model.findOne({ where: { id: id }, ...options});
			} else {
				return await this.model.findAll({ options });
			}
		} catch (e) {
			console.log("Collection class read error", e);
		}
	}

	async create(data) {
		try {
			return await this.model.create(data);
		} catch (e) {
			console.log("Collection create error", e);
		}
	}

	async update(id, data) {
		try {
			let updatedRecord = await this.model.update(
				data,
				{
					where: { id: id }
				}
			);
			return updatedRecord;

		} catch (e) {
			console.log("Collection update error", e);
		}
	}

	async delete(id) {
		try {
			let message = await this.model.destroy({
				where: { id: id }
			});
			return message;
		} catch (e) {
			console.log("Collection update error", exports);
		}
	}
}

module.exports = Collection;