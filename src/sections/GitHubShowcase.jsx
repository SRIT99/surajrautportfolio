import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, BookOpen, Code, Activity, ExternalLink, Calendar } from 'lucide-react';

const GitHubShowcase = () => {
  const username = 'SRIT99';
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [activity, setActivity] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackProfile = {
    avatar_url: 'https://avatars.githubusercontent.com/u/8768920?v=4',
    name: 'Suraj Raut',
    bio: 'Full-Stack Developer | PERN Stack Specialist | Software Engineering Student',
    public_repos: 18,
    followers: 12,
    following: 15,
    html_url: `https://github.com/${username}`
  };

  const fallbackRepos = [
    { name: 'PharmaLink-B2B', description: 'Centralized B2B pharmaceutical e-commerce and supply chain management platform built using PostgreSQL, Express, React, and Node.js.', stargazers_count: 5, forks_count: 2, language: 'JavaScript', html_url: `https://github.com/${username}/PharmaLink-B2B` },
    { name: 'Doko-AgroMarket', description: 'Digital agro-marketplace linking farmers and buyers directly with transport coordination services.', stargazers_count: 4, forks_count: 1, language: 'JavaScript', html_url: `https://github.com/${username}/Doko-AgroMarket` },
    { name: 'pern-stack-boilerplate', description: 'A clean boilerplate codebase containing pre-configured JWT authentication, role-based dashboards, and pool connections.', stargazers_count: 3, forks_count: 0, language: 'JavaScript', html_url: `https://github.com/${username}` },
    { name: 'nepal-geo-helper', description: 'Utility helper library that maps and filters municipalities, districts, and provinces of Nepal.', stargazers_count: 2, forks_count: 1, language: 'JavaScript', html_url: `https://github.com/${username}` }
  ];

  const fallbackActivity = [
    { type: 'PushEvent', repo: 'PharmaLink-B2B', msg: 'Implement JWT auth & supplier dashboard layout', date: '2 days ago' },
    { type: 'PushEvent', repo: 'Doko-AgroMarket', msg: 'Setup initial database schema and connection pool', date: '5 days ago' },
    { type: 'CreateEvent', repo: 'nepal-geo-helper', msg: 'Create repository and initialize vite config', date: '1 week ago' },
  ];

  const fallbackLanguages = [
    { name: 'JavaScript', percent: 65, color: '#F7DF1E' },
    { name: 'CSS / HTML', percent: 18, color: '#264DE4' },
    { name: 'SQL / PostgreSQL', percent: 12, color: '#336791' },
    { name: 'Other', percent: 5, color: '#8b8b8b' }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        const cachedProfile = localStorage.getItem(`gh_profile_${username}`);
        const cachedRepos = localStorage.getItem(`gh_repos_${username}`);
        const cachedActivity = localStorage.getItem(`gh_activity_${username}`);
        const cachedLanguages = localStorage.getItem(`gh_languages_${username}`);
        const cacheTime = localStorage.getItem(`gh_cache_time_${username}`);
        const isCacheValid = cacheTime && (new Date().getTime() - parseInt(cacheTime)) < 3600000;

        if (cachedProfile && cachedRepos && isCacheValid) {
          setProfile(JSON.parse(cachedProfile));
          setRepos(JSON.parse(cachedRepos));
          setActivity(JSON.parse(cachedActivity) || fallbackActivity);
          setLanguages(JSON.parse(cachedLanguages) || fallbackLanguages);
          setLoading(false);
          return;
        }

        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error('API Rate Limited');
        const profileData = await profileRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`);
        if (!reposRes.ok) throw new Error('API Error');
        const reposData = await reposRes.json();

        let activityData = [];
        try {
          const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=6`);
          if (eventsRes.ok) {
            const events = await eventsRes.json();
            activityData = events
              .filter(e => e.type === 'PushEvent' || e.type === 'CreateEvent')
              .map(e => ({
                type: e.type,
                repo: e.repo.name.replace(`${username}/`, ''),
                msg: e.payload.commits ? e.payload.commits[0].message : 'Created repository / branch',
                date: new Date(e.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
              }))
              .slice(0, 4);
          }
        } catch { activityData = fallbackActivity; }

        const langMap = {};
        let totalVal = 0;
        reposData.forEach(r => {
          if (r.language) { langMap[r.language] = (langMap[r.language] || 0) + 1; totalVal++; }
        });
        const colorsMap = { 'JavaScript': '#F7DF1E', 'TypeScript': '#3178C6', 'CSS': '#563D7C', 'HTML': '#E34C26', 'Python': '#3572A5', 'Shell': '#89E051' };
        const computedLangs = Object.keys(langMap).map(key => ({
          name: key,
          percent: Math.round((langMap[key] / totalVal) * 100),
          color: colorsMap[key] || '#10B981'
        })).sort((a, b) => b.percent - a.percent);

        localStorage.setItem(`gh_profile_${username}`, JSON.stringify(profileData));
        localStorage.setItem(`gh_repos_${username}`, JSON.stringify(reposData));
        localStorage.setItem(`gh_activity_${username}`, JSON.stringify(activityData));
        localStorage.setItem(`gh_languages_${username}`, JSON.stringify(computedLangs));
        localStorage.setItem(`gh_cache_time_${username}`, new Date().getTime().toString());

        setProfile(profileData);
        setRepos(reposData.slice(0, 4));
        setActivity(activityData.length > 0 ? activityData : fallbackActivity);
        setLanguages(computedLangs.length > 0 ? computedLangs : fallbackLanguages);
      } catch (err) {
        console.warn('GitHub API error, loading fallback:', err);
        setProfile(fallbackProfile);
        setRepos(fallbackRepos);
        setActivity(fallbackActivity);
        setLanguages(fallbackLanguages);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="section-padding" style={{ background: 'var(--section-dark)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)' }}>Fetching live code statistics from GitHub...</p>
          <div style={{ border: '4px solid var(--border-color)', borderTop: '4px solid var(--primary)', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '2rem auto 0 auto' }} />
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </section>
    );
  }

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--section-dark)', position: 'relative' }}>
      <div className="container">

        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Showcase</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)', marginTop: '0.5rem' }}>GitHub Activity</h2>
          <div style={{ width: '40px', height: '3px', background: 'var(--gradient-primary)', margin: '1rem auto 0 auto', borderRadius: '2px' }} />
        </div>

        {/* Layout Grid — custom 3 col on desktop */}
        <div className="github-grid">

          {/* Card 1: Profile & Language Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Profile */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img
                  src={profile?.avatar_url || fallbackProfile.avatar_url}
                  alt={profile?.name || 'Suraj Raut'}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', border: '2px solid var(--primary)', flexShrink: 0 }}
                />
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 600 }}>{profile?.name || 'Suraj Raut'}</h3>
                  <a
                    href={profile?.html_url || `https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.1rem' }}
                  >
                    @{username}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Repos', val: profile?.public_repos || 0 },
                  { label: 'Followers', val: profile?.followers || 0 },
                  { label: 'Following', val: profile?.following || 0 }
                ].map(({ label, val }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.2rem' }}>{val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{label}</div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {profile?.bio || fallbackProfile.bio}
              </p>
            </div>

            {/* Language Breakdown */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={17} color="var(--primary)" />
                Top Languages
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {languages.map((lang) => (
                  <div key={lang.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{lang.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{lang.percent}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${lang.percent}%`, background: lang.color, borderRadius: '2px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Active Repositories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)', margin: '0 0 0.25rem 0' }}>
              <BookOpen size={19} color="var(--primary)" />
              Active Repositories
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
              {repos.map((repo, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '110px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h5 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>{repo.name}</h5>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {repo.language && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
                        {repo.language}
                      </span>
                    )}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <Star size={11} />
                      {repo.stargazers_count}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      <GitBranch size={11} />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Card 3: Activity & Contributions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Recent Activity */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={17} color="var(--primary)" />
                Recent Activity
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {activity.map((act, index) => (
                  <div key={index} style={{ borderLeft: '2px solid rgba(16, 185, 129, 0.25)', paddingLeft: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                      <span style={{ fontWeight: 600 }}>{act.repo}</span>
                      <span>{act.date}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {act.msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Map */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-display)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={17} color="var(--primary)" />
                Contributions
              </h4>
              <div style={{ width: '100%', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <img
                  src={`https://ghchart.rshah.org/10b981/${username}`}
                  alt="GitHub Contributions"
                  style={{ width: '100%', height: 'auto', display: 'block', padding: '0.5rem' }}
                />
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'right', marginTop: '0.5rem', opacity: 0.7 }}>
                Via ghchart.rshah.org
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .github-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.3fr 0.85fr;
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .github-grid {
            grid-template-columns: 1fr 1fr;
          }
          .github-grid > div:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 640px) {
          .github-grid {
            grid-template-columns: 1fr;
          }
          .github-grid > div:last-child {
            grid-column: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default GitHubShowcase;
