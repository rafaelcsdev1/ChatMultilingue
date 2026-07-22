import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { LanguageLevel, UserProfile } from '../types/user';
import { UserService } from '../services/user.service';

const proficiencyLevels: { value: LanguageLevel; label: string; description: string }[] = [
  { value: 'A1', label: 'A1', description: 'Iniciante absoluto: frases curtas e vocabulário básico.' },
  { value: 'A2', label: 'A2', description: 'Básico: comunicações simples e situações cotidianas.' },
  { value: 'B1', label: 'B1', description: 'Intermediário: conversas sobre rotina e opiniões pessoais.' },
  { value: 'B2', label: 'B2', description: 'Intermediário avançado: argumentos mais detalhados e fluência.' },
  { value: 'C1', label: 'C1', description: 'Avançado: discurso fluido e ideias complexas.' },
  { value: 'C2', label: 'C2', description: 'Proficiência completa: linguagem natural e nuance cultural.' }
];

export function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<LanguageLevel>('A1');
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    UserService.getCurrentUser()
      .then((data) => {
        setUser(data);
        if (data.level) {
          setSelectedLevel(data.level);
        }
      })
      .catch(() => {
        setStatusMessage('Faça login para carregar suas preferências.');
      });
  }, []);

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value as LanguageLevel);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);

    try {
      const updatedUser = await UserService.updateUserLevel(selectedLevel);
      setUser(updatedUser);
      setStatusMessage('Nível salvo com sucesso. A IA poderá adaptar seu vocabulário e gramática.');
    } catch (error) {
      setStatusMessage('Não foi possível salvar o nível. Verifique sua autenticação.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="page-panel">
      <div className="page-heading">
        <h2>Perfil</h2>
        <p>Gerencie seu nível de proficiência e deixe a IA adaptar a conversa automaticamente.</p>
      </div>

      <div className="page-card">
        <div>
          <h3>Meu nível de proficiência</h3>
          <p>Defina seu nível de habilidade para que o sistema selecione vocabulário, frases e gramática adequados.</p>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <label htmlFor="level-select">Nível atual</label>
          <select id="level-select" value={selectedLevel} onChange={handleLevelChange}>
            {proficiencyLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>

          <div className="level-description">
            {proficiencyLevels.find((level) => level.value === selectedLevel)?.description}
          </div>

          <button className="button-primary" type="submit" disabled={isSaving}>
            {isSaving ? 'Salvando...' : 'Salvar nível'}
          </button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </section>
  );
}
