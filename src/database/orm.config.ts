import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm"

export const dataSourceOptions: DataSourceOptions = 
{
    type: "postgres",
    username:"postgres",
    password:"123",
    host:"localhost",
    port: 5432,
    database:"kuyayana",
    entities: [__dirname + '../modules/**/entities/*.entity.{ts,js}'],
    migrations: ["./migrations"],
    migrationsRun: true,
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;