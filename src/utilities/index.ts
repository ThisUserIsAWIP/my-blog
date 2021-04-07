//universally defined types

export interface Post {
    id: number,
    title: string,
    name?: Author['name'],
    content: string,
    authorid: Author['id'],
    _created: string
};

export interface Author {
    id: number,
    name: string,
    email: string,
    description: string,
    title?: string,
    _created: string,
    postid?: Post['id']
};

export interface Tag {
    id: number,
    name: string,
    _created: string
};

export interface PostTags {
    postid: Post['id'],
    tagid: Tag['id']
};

export interface PostsOfATag {
    name: Author['name'],
    id: Post['id'],
    tagid: Tag['id'],
    title: Post['title'],
    content: Post['content'],
    _created: Post['_created'],
    authorid: Post['authorid']
};

export interface MySQL_Err {
    code?: string;
    errno?: number;
    sqlMessage?: string;
    sqlState?: string;
    index?: number;
    sql?: string;
}

export interface MySQL_Success {
    fieldCount?: number;
    affectedRows?: number;
    insertId?: number;
    serverStatus?: number;
    warningCount?: number;
    message?: string;
    protocol41?: boolean;
    changedRows?: number;
}

export type MySQL_Res = MySQL_Success & MySQL_Err;