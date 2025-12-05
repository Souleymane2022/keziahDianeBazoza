import React, { createContext, useContext, useState, ReactNode } from 'react';
import { nanoid } from 'nanoid';
import news1 from "@assets/UniPod_109_1764904182488.JPG";
import news2 from "@assets/UniPod_124_1764904182480.JPG";
import news3 from "@assets/UniPod_42_1764904182501.JPG";

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
};

type NewsContextType = {
  news: NewsItem[];
  addNews: (news: Omit<NewsItem, 'id' | 'date'>) => void;
  deleteNews: (id: string) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Empowering Youth Through Digital Innovation Hubs",
    excerpt: "Engaging with the next generation of tech leaders at the latest UniPod event.",
    content: "Smart Africa has officially launched a new initiative aimed at bridging the digital divide...",
    date: "2025-05-15",
    image: news1
  },
  {
    id: '2',
    title: "Strengthening Regional Partnerships",
    excerpt: "Discussing the future of digital infrastructure and policy harmonization with key stakeholders.",
    content: "It was an honor to speak at the African Tech Summit this year, sharing insights on...",
    date: "2025-04-20",
    image: news2
  },
  {
    id: '3',
    title: "Workshop: Digital Strategies for SMEs",
    excerpt: "Leading a session on how small businesses can leverage digital tools for growth.",
    content: "A productive session with SME owners discussing practical steps for digital adoption...",
    date: "2025-03-10",
    image: news3
  }
];

export function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addNews = (newItem: Omit<NewsItem, 'id' | 'date'>) => {
    const article: NewsItem = {
      ...newItem,
      id: nanoid(),
      date: new Date().toISOString().split('T')[0]
    };
    setNews([article, ...news]);
  };

  const deleteNews = (id: string) => {
    setNews(news.filter(item => item.id !== id));
  };

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews, isAuthenticated, login, logout }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}
