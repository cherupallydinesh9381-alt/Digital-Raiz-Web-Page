import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const id = sectionIds[index];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(id);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
