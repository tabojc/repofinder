export default function Searchbox ({ title = '', value = '', onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
        <span>{title}</span>
        <input
            id='name'
            name='name'
            type='search'
            value={value}
            placeholder={title}
            onChange={onChange}
        />
        <button>Search</button>
    </form>
  )
}
