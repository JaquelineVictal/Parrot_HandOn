import * as Sequelize from "sequelize";
import DBConfig from "../config/database.config";
import { IDatabaseModel} from "../database.model.interface";

export class MySqlDB implements  IDatabaseModel {
    private static _instance: MySqlDB;
    private _db: string;
    private _username: string;
    private _password: string;
    private _host: string;
    private _dialect: Sequelize.Dialect;
    private _port: number;
    private _adapter: Sequelize.Sequelize;

    private constructor(){
        this._db = DBConfig.database!;
        this._username = DBConfig.username!;
        this._password = DBConfig.password!;
        this._host = DBConfig.host!;
        this._dialect = 'mysql';
        this._port = Number(DBConfig.port);

        this._adapter = new Sequelize.Sequelize(this._db, this._username, this._password, {
            host: this._host,
            dialect: this._dialect,
            port: this._port
        });
    }

    public static getInstance(): MySqlDB {
        if (!MySqlDB._instance) {
            MySqlDB._instance = new MySqlDB();
        }

        return MySqlDB._instance;
    }

    create(model: Sequelize.ModelCtor<Sequelize.Model<any, any>>, data: any): any {
        return model.create(data);
    }

    async update(model: Sequelize.Model<any, any>, data: any): Promise<any> {
        await model.update(data);
        return model.save();
    
    }

    list(model: Sequelize.ModelCtor<Sequelize.Model<any, any>>, includes: object): any {
        return model.findAll(includes);
    }

    async delete(model: Sequelize.ModelCtor<Sequelize.Model<any, any>>, dataWhere: Sequelize.WhereOptions<any>): Promise<any> {
        const result = await model.destroy({
            where: dataWhere
        });

        return (result > 0);
    }

    read(model: Sequelize.ModelCtor<Sequelize.Model<any, any>>, dataId: number, includes: object): any {
        try{
            return model.findByPk(dataId, includes);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }

    createModel(name: string, properties: Sequelize.ModelAttributes): Sequelize.ModelCtor<Sequelize.Model<any, any>> {
        return this._adapter.define(
            name,
            properties,
            {
                timestamps: false
            }
        )
    }

    async selectQuery(sql: string, replacements: any) {
        return await this._adapter.query(
            sql,
            {
                type: Sequelize.QueryTypes.SELECT,
                replacements: replacements
            }
        );   
    }

    async login(model: Sequelize.ModelCtor<Sequelize.Model<any,any>>, data: {email: string, password: string}):Promise<any> {
        return await model.findOne({
            where: {email: data.email}
        })
    }
}