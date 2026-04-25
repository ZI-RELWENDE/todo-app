import { useState } from 'react'
import './App.css' 

function App(){
  const [tache, setTache] = useState('')
  const [listeTaches, setListeTaches] = useState([])

  // Ajout de taches
  const ajouterTache = () => {
    if (tache === '') return
    setListeTaches([...listeTaches, { texte: tache, terminee: false }])
    setTache('')
  }

  // Suppression
  const supprimerTaches = (index) => {
    const nouvelleListe = listeTaches.filter((t, i) => i !== index)
    setListeTaches(nouvelleListe)
  }

  // État de la tache (terminée/pas encore terminée)
  const toggleTache = (index) => {
    const nouvelleListe = [...listeTaches]
    nouvelleListe[index].terminee = !nouvelleListe[index].terminee
    setListeTaches(nouvelleListe)
  }

  return (
    <div className="container">
      <h1>Ma To-Do App</h1>

      {/* Ajouter une tache */}
      <div className="input-zone">
      <input 
        type="text" 
        placeholder="Ajouter une tache..." 
        value={tache}
        onChange={(e) => setTache(e.target.value)}
      />
      <button className="btn-ajouter" onClick={ajouterTache}>Ajouter</button>
    </div>
      <ul>
        {listeTaches.map((t, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTache(index)}
              style={{
                textDecoration: t.terminee ? 'line-through' : 'none',
                cursor: 'pointer',
                color: t.terminee ? 'gray' : 'black'
              }}
            >
              {t.texte}
            </span>
            <button className="btn-supprimer" onClick={() => supprimerTaches(index)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App