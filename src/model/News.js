class News {
    id = 0;
    title = '';
    content = '';
    author = '';
    category = '';
    created_at = '';
    updated_at = '';

    constructor({id, title, content, author, category, created_at, updated_at}) {
        this.id = id === undefined ? 0 : id;
        this.title = title === undefined ? '' : title;
        this.content = content === undefined ? '' : content;
        this.author = author === undefined ? '' : author;
        this.category = category === undefined ? '' : category;
        this.created_at = created_at === undefined ? '' : created_at;
        this.updated_at = updated_at === undefined ? '' : updated_at;
    }
}

module.exports = News;