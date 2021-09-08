const database = require('../database');


// Coremodel CRUD basic for SQL

class CoreModel {

    constructor(obj={}){
        for (const propName in obj) {
           this[propName] = obj[propName];
        }
    };

    static async findAll() {
        try {
            const { rows } = await database.query(`_`) ;
            return rows.map(row => new CoreModel(row)); 

        } catch (error) {
              throw new Error(error);
            
        }
    };

    static async findByPk(id) {
        try {
            const { rows } = await database.query(`_`,[id]);
            return new CoreModel(rows[0]);

        } catch (error) {
            
            throw new Error(error);
             
            
        }
    };

    async save() {
        try {
            if (this.id) {
                await database.query(`_`, [this._]);
            } else {
                const {rows} = await database.query(`_`, [this._]);
                this.id = rows[0].id;
                return this;
            }
        } catch(error) {
            throw new Error(error);
            
        }
    }

};

module.exports = CoreModel;