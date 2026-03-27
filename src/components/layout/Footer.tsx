export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-surface-border bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Jitendra Kolli. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/jitendra-789" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/jitendrakolli" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/jitendra789/" className="hover:text-white transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
