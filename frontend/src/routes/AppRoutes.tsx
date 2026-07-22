import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Chat } from '../pages/Chat';
import { Lessons } from '../pages/Lessons';
import { Vocabulary } from '../pages/Vocabulary';
import { Progress } from '../pages/Progress';
import { Profile } from '../pages/Profile';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/vocabulary" element={<Vocabulary />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
