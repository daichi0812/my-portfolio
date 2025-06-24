'use client'
import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Code, Smartphone, Cpu, ExternalLink, Menu, X } from 'lucide-react';

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Project data - ここにあなたのプロジェクト情報を追加・編集してください
  const projects = [
    {
      title: 'Madoi',
      description: 'Flutterを用いて、自分の所属する自動車部向けて、自動車の整備記録やセッティング記録、ToDoリストをまとめたアプリを開発しました。',
      tags: ['Flutter', 'Dart'],
      imageUrl: '/images/madoi.png',
      link: 'https://github.com/daichi0812/madoi', // あなたのGitHubリポジトリへのリンク
    },
    {
      title: 'Simple MPM',
      description: 'MPM(Material Point Method の簡単なシミュレーションを実装しました。',
      tags: ['C++', 'OpenGL','SFML'],
      imageUrl: '/images/simple-mpm-cpp.png',
      link: 'https://github.com/daichi0812/2d-stable-fluids', // あなたのGitHubリポジトリへのリンク
    },
    {
      title: '2D Stable Fluids',
      description: '流体の基礎的なシミュレーションを実装しました。FLIP法などを用いずに、ナビエスークス方程式を各項に分解し、それぞれの項に対してステップを立て、シミュレーションを実行しました。',
      tags: ['C++', 'OpenGL',],
      imageUrl: '/images/stable-fluids.png',
      link: 'https://github.com/daichi0812/2d-stable-fluids', // あなたのGitHubリポジトリへのリンク
    },
    {
      title: '機材管理システム',
      description: '友人と大学の放送部に向けて、機材の貸し出し状況を管理するシステムを作りました。',
      tags: ['Next.js', 'Typescript', 'TailwindCSS', 'Prisma', 'Auth.js'],
      imageUrl: '/images/auth-logicode.png',
      link: 'https://github.com/daichi0812/abs-ems', // あなたのGitHubリポジトリへのリンク
    },
    {
      title: 'SurperwindUI',
      description: 'SuperwindUIは、スタイルを固定化することにより、モダンなUIを超速で開発できるReact, Next.jsのUIコンポーネントライブラリです。また、従来のUIコンポーネントライブラリとは比べ、コンポーネントの単位が大きく、ドキュメントをそこまで読まなくても、フロントエンド初学者でも簡単に使うことができます。',
      tags: ['Next.js', 'Typescript', 'TailwindCSS'],
      imageUrl: '/images/superwindui.png',
      link: 'https://github.com/balckowl/superwindui',
    },
  ];

  // Skills data
  const skills = [
    { name: 'C++', icon: <Cpu size={32} /> },
    { name: 'Python', icon: <Code size={32} /> },
    { name: 'Rust', icon: <Cpu size={32} /> },
    { name: 'TypeScript', icon: <Code size={32} /> },
    { name: 'Flutter', icon: <Smartphone size={32} /> },
    { name: 'Next.js', icon: <Code size={32} /> },
    { name: 'React', icon: <Code size={32} /> },
    
  ];

  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            Daichi Hotta
          </a>
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="hover:text-indigo-400 transition-colors">私について</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">制作実績</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">スキル</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">お問い合わせ</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">私について</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">制作実績</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">スキル</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors">お問い合わせ</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-grid-gray-700/[0.2]">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Daichi Hotta
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
              計算の力で、複雑な世界を解き明かし、未来を実装する
            </p>
            <a href="#projects" className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105">
              制作実績を見る
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">私について</h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <img 
                src="https://placehold.co/200x200/6366f1/ffffff?text=D.H" 
                alt="プロフィール写真" 
                className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-gray-700 flex-shrink-0"
              />
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-400 mb-4">
                  青山学院大学 理工学部情報テクノロジー学科 4年<br />
                  コンピュータグラフィックス研究室 所属
                </p>
                <p className="text-md text-gray-300 mb-4">
                  大学でコンピュータサイエンスを学ぶ中で、計算の力で現実世界の複雑な課題を解決することに魅力を感じています。現在は、コンピュータグラフィックスの研究室に所属し、連続体力学やMPMに関する物理シミュレーションの研究を通じて、そのための基礎となる数学的、物理的知識とC++やPythonによる実装力を養っています。
                </p>
                <p className="text-md text-gray-300 mb-4">
                  私が特に関心を持っているのは、計算負荷がボトルネックとなる課題の解決です。研究で取り組んでいる物理演算やHPC分野に加え、OSやブラウザのように、システム全体のパフォーマンスを決定づける低レイヤー技術にも強い興味があります。
                </p>
                <p className="text-md text-gray-300 mb-4">
                  この興味は、より現代的な課題にも繋がっています。例えば、深層学習・強化学習のモデル実用化の鍵となる推論速度の向上や、ブロックチェーンの社会実装を阻むスループットの問題など、計算効率の改善がブレークスルーを生む領域に挑戦したいと考えています。
                </p>
                <p className="text-md text-gray-300">
                  研究で得た専門性に加え、Next.jsやFlutterを用いた個人開発を通じて、ユーザーに価値を届けるためのアプリケーション開発経験も積んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">制作実績</h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold">
                      詳しく見る <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">スキル</h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4"></div>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="text-indigo-400 mb-2">{skill.icon}</div>
                  <p className="font-semibold text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">お問い合わせ</h2>
          <p className="text-gray-400 mb-6">
            お仕事のご依頼やご相談など、お気軽にご連絡ください。
          </p>
          <a href="daichi.hotta.0812@gmail.com" className="text-lg text-indigo-400 hover:text-indigo-300 transition-colors">
            daichi.hotta.0812@gmail.com
          </a>
          <div className="flex justify-center space-x-6 mt-8">
            {/* ここにあなたのSNSリンクを入れてください */}
            <a href="https://twitter.com/glound_1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            <a href="https://github.com/daichi0812" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
          <p className="text-gray-500 mt-10 text-sm">
            &copy; {new Date().getFullYear()} 堀田大智. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
