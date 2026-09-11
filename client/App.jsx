import { useState } from 'react';
import { useReddit } from '@devvit/web/client';

export function App() {
  const reddit = useReddit();
  const [activeTab, setActiveTab] = useState('queue');
  const [queue, setQueue] = useState([]);
  const [logs, setLogs] = useState([]);
  const [mail, setMail] = useState([]);
  const [flairs, setFlairs] = useState([]);

  return (
    <div>
      <h1>Brett's Mod Suite</h1>
      <p>All-in-one Reddit moderation dashboard</p>
      
      <nav>
        <button onClick={() => setActiveTab('queue')}>Queue</button>
        <button onClick={() => setActiveTab('log')}>Log</button>
        <button onClick={() => setActiveTab('mail')}>Mail</button>
        <button onClick={() => setActiveTab('flair')}>Flair</button>
      </nav>

      {activeTab === 'queue' && (
        <div>
          <h2>Moderation Queue</h2>
          <p>Queue items: {queue.length}</p>
        </div>
      )}
      {activeTab === 'log' && (
        <div>
          <h2>Moderation Log</h2>
          <p>Actions: {logs.length}</p>
        </div>
      )}
      {activeTab === 'mail' && (
        <div>
          <h2>Mod Mail</h2>
          <p>Messages: {mail.length}</p>
        </div>
      )}
      {activeTab === 'flair' && (
        <div>
          <h2>Flair Management</h2>
          <p>Flairs: {flairs.length}</p>
        </div>
      )}
    </div>
  );
}