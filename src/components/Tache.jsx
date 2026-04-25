function Tache({ tache, index, onSupprimer, onToggle }) {
  return (
    <li>
      <span
        onClick={() => onToggle(index)}
        style={{
          textDecoration: tache.terminee ? 'line-through' : 'none',
          cursor: 'pointer',
          color: tache.terminee ? 'gray' : '#333'
        }}
      >
        {tache.texte}
      </span>
      <button className="btn-supprimer" onClick={() => onSupprimer(index)}>
        Supprimer
      </button>
    </li>
  )
}

export default Tache