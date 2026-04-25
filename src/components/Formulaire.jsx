function Formulaire({ tache, onChangerTache, onAjouter }) {
  return (
    <div className="input-zone">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={tache}
        onChange={(e) => onChangerTache(e.target.value)}
      />
      <button className="btn-ajouter" onClick={onAjouter}>
        Ajouter
      </button>
    </div>
  )
}

export default Formulaire