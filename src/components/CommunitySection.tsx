import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageSquare, Plus, Send, UserCheck, Sparkles, X, MessageCircle } from 'lucide-react';
import { INITIAL_DISCUSSIONS } from '../data';
import { DiscussionPost, Reply } from '../types';

export function CommunitySection() {
  const [posts, setPosts] = useState<DiscussionPost[]>(INITIAL_DISCUSSIONS);
  const [activeReplyPostId, setActiveReplyPostId] = useState<string | null>(null);
  const [replyInput, setReplyInput] = useState('');
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);

  // New Post Form State
  const [newAuthor, setNewAuthor] = useState('');
  const [newSchool, setNewSchool] = useState('');
  const [newMajor, setNewMajor] = useState('Perhotelan (Hospitality)');
  const [newContent, setNewContent] = useState('');

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const isLiked = p.isLiked;
        return {
          ...p,
          isLiked: !isLiked,
          likes: isLiked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  const handleAddReply = (postId: string) => {
    if (!replyInput.trim()) return;
    const newReply: Reply = {
      id: Date.now().toString(),
      author: "Anda (Siswa SMK)",
      content: replyInput.trim(),
      time: "Baru saja"
    };

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          repliesCount: p.repliesCount + 1,
          replies: [...p.replies, newReply]
        };
      }
      return p;
    }));

    setReplyInput('');
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newPost: DiscussionPost = {
      id: `post-${Date.now()}`,
      author: newAuthor.trim(),
      school: newSchool.trim() || 'Siswa SMK Indonesia',
      major: newMajor,
      content: newContent.trim(),
      likes: 1,
      isLiked: true,
      repliesCount: 0,
      replies: []
    };

    setPosts([newPost, ...posts]);
    setNewAuthor('');
    setNewSchool('');
    setNewContent('');
    setIsNewPostModalOpen(false);
  };

  return (
    <div className="py-12 sm:py-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner matching Image 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-500 text-white shadow-2xl shadow-blue-900/20"
        >
          <div className="relative z-10 max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Temukan Teman Belajar & <br className="hidden sm:block" />
              Partner Speaking Percakapan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 font-normal leading-relaxed">
              Komunitas pembelajaran yang memungkinkan siswa SMK saling berdiskusi, berlatih percakapan Bahasa Inggris secara aktif, dan membangun motivasi belajar bersama meraih karier Eropa.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsNewPostModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-sm sm:text-base font-extrabold text-blue-700 bg-white hover:bg-blue-50 rounded-2xl shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <Plus className="w-5 h-5 stroke-[3]" />
                <span>Buat Diskusi / Cari Teman</span>
              </button>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute right-12 bottom-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />
        </motion.div>

        {/* List of Discussions matching Image 4 */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-xl font-black text-slate-800 tracking-tight">Diskusi Terbaru Siswa SMK</h2>
            <span className="text-xs font-bold text-slate-400">{posts.length} Diskusi Aktif</span>
          </div>

          {posts.map((post) => {
            const isExpanded = activeReplyPostId === post.id;
            return (
              <motion.div
                layout
                key={post.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-5"
              >
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-lg shadow-sm shrink-0">
                    {post.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 flex flex-wrap items-center gap-1.5 leading-snug">
                      <span>{post.author}</span>
                      <span className="text-slate-500 font-bold text-sm">({post.school})</span>
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {post.major}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-1">
                  {post.content}
                </p>

                {/* Likes & Replies Row */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-100 text-sm font-bold text-slate-600">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      post.isLiked ? 'text-rose-600 bg-rose-50' : 'hover:bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-rose-600 text-rose-600 scale-110' : ''}`} />
                    <span>{post.likes} Suka</span>
                  </button>

                  <button
                    onClick={() => setActiveReplyPostId(isExpanded ? null : post.id)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-slate-100 text-slate-500 cursor-pointer transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.repliesCount} Balasan</span>
                  </button>
                </div>

                {/* Expanded Replies Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-slate-100 space-y-4 overflow-hidden"
                    >
                      <div className="space-y-3 pl-4 sm:pl-8 border-l-2 border-blue-100">
                        {post.replies.length > 0 ? (
                          post.replies.map(rep => (
                            <div key={rep.id} className="bg-slate-50 p-4 rounded-2xl text-xs sm:text-sm space-y-1">
                              <div className="flex justify-between items-center font-bold text-slate-900">
                                <span className="text-blue-700">{rep.author}</span>
                                <span className="text-[10px] text-slate-400 font-normal">{rep.time}</span>
                              </div>
                              <p className="text-slate-600 leading-relaxed">{rep.content}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400 italic py-2">Belum ada balasan. Jadilah yang pertama membalas!</p>
                        )}
                      </div>

                      {/* Reply Input Box */}
                      <div className="flex items-center gap-2 pt-2">
                        <input
                          type="text"
                          value={replyInput}
                          onChange={(e) => setReplyInput(e.target.value)}
                          placeholder="Tulis balasan atau ajakan speaking bareng..."
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                          onKeyDown={(e) => { if (e.key === 'Enter') handleAddReply(post.id); }}
                        />
                        <button
                          onClick={() => handleAddReply(post.id)}
                          className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 cursor-pointer shadow-sm active:scale-95 transition-all shrink-0"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* New Post Modal */}
      <AnimatePresence>
        {isNewPostModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900">Buat Diskusi / Cari Partner Speaking</h3>
                <button onClick={() => setIsNewPostModalOpen(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleCreatePost} className="space-y-4 mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Kamu</label>
                  <input
                    required
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Contoh: Ahmad Rizki"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Asal Sekolah SMK</label>
                  <input
                    type="text"
                    value={newSchool}
                    onChange={(e) => setNewSchool(e.target.value)}
                    placeholder="Contoh: Siswa Kelas XII SMKN 1 Semarang"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Jurusan Kejuruan</label>
                  <select
                    value={newMajor}
                    onChange={(e) => setNewMajor(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:bg-white"
                  >
                    <option value="Perhotelan (Hospitality)">Perhotelan (Hospitality)</option>
                    <option value="Tata Boga">Tata Boga</option>
                    <option value="Konstruksi">Konstruksi</option>
                    <option value="Teknologi Manufaktur">Teknologi Manufaktur / CNC</option>
                    <option value="Caregiver">Caregiver / Keperawatan</option>
                    <option value="Teknik Otomotif">Teknik Otomotif</option>
                    <option value="IT & Software">IT & Software</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Isi Diskusi / Ajak Speaking</label>
                  <textarea
                    required
                    rows={4}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Tulis cerita interview kamu atau ajak teman berlatih kosa kata bahasa Inggris vokasi bareng..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsNewPostModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 cursor-pointer active:scale-95"
                  >
                    Publikasikan Diskusi
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
