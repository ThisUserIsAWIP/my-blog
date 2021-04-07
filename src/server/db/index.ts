import * as mysql from 'mysql';
import authors from './authors';
import posts from './posts';
import tags from './tags';
import posttags from './posttags';
import { MySQL_Res } from '../../utilities';

//connect to mysql
export const Connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'blog_app',
password: 'blog_pass',
database: 'myBlog'
});

//Query function to interact w/ database
export const Query = <T = any>(query: string, values?:Array<string | number>) => {
    const SQLstring = mysql.format(query, values)
    return new Promise<T>((resolve, reject) => {
        Connection.query(SQLstring, (err, results) => {
        if(err) return reject(err);
        return resolve(results);
        });
    });
}

export default {
    authors,
    posts,
    tags,
    posttags
}