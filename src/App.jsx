import { useState, useEffect } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Tache from './components/Tache'

const API = 'http://192.168.100.8:3000'

function App(){
  const [tache, setTache] = useState('')
  const [listeTaches, setListeTaches] = useState([])

  // Charger les tâches depuis le backend au démarrage
  useEffect(() => {
    fetch(`${API}/taches`)
      .then(res => res.json())
      .then(data => setListeTaches(data))
  }, [])

  // Ajouter une tâche
  const ajouterTache = () => {
    if (tache === '') return
    fetch(`${API}/taches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texte: tache })
    })
      .then(res => res.json())
      .then(nouvelleTache => {
        setListeTaches([...listeTaches, nouvelleTache])
        setTache('')
      })
  }

  // Supprimer une tâche
  const supprimerTaches = (id) => {
    fetch(`${API}/taches/${id}`, { method: 'DELETE' })
      .then(() => setListeTaches(listeTaches.filter(t => t.id !== id)))
  }

  //Toggler une tâche
  const toggleTache = (id) => {
    fetch(`${API}/taches/${id}`, { method: 'PATCH' })
      .then(res => res.json())
      .then(tacheMaj => {
        setListeTaches(listeTaches.map(t => t.id === tacheMaj.id ? tacheMaj : t))
      })
  }

  return (
    <div className="container">
      <h1>Objectif+</h1>

      <Formulaire
        tache={tache}
        onChangerTache={setTache}
        onAjouter={ajouterTache}
      />

      <ul>
        {listeTaches.map((t) => (
          <Tache
            key={t.id}
            tache={t}
            index={t.id}
            onSupprimer={supprimerTaches}
            onToggle={toggleTache}
          />
        ))}
      </ul>
    </div>
  )
}

export default App