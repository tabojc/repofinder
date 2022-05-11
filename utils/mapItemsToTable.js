export function mapItemsToTable({ items }) {
    const result = []
    items.map(item => {
        result.push({
            number: result.length + 1,
            id: item.id,
            name: item.name,
            html_url: item.html_url,
            avatar_url: (<img alt={item.name} src={item.owner.avatar_url} />),
            description: item.description,
			created_at: new Date(item.created_at).toLocaleString(),
			updated_at: new Date(item.updated_at).toLocaleString(),
        })
    });
    return result;
}
