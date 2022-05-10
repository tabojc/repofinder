export function mapItemsToTable({ items }) {
    const result = []
    items.map(item => {
        result.push({
            id: item.id,
            name: item.name,
            private: item.private,
            html_url: item.html_url,
            avatar_url: (<img alt={item.name} src={item.owner.avatar_url} />),
            description: item.description,
			created_at: item.created_at,
			updated_at: item.updated_at,
        })
    });
    return result;
}