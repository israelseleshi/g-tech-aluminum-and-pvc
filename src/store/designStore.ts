import { create } from 'zustand';

interface DesignState {
  projectVariant: number;
  setProjectVariant: (variant: number) => void;
  legalVariant: number;
  setLegalVariant: (variant: number) => void;
  footerVariant: number;
  setFooterVariant: (variant: number) => void;
  leadershipVariant: number;
  setLeadershipVariant: (variant: number) => void;
  projectListingVariant: number;
  setProjectListingVariant: (variant: number) => void;
  separatorVariant: number;
  setSeparatorVariant: (variant: number) => void;
  parallaxVariant: number;
  setParallaxVariant: (variant: number) => void;
}

export const useDesignStore = create<DesignState>((set) => ({
  projectVariant: 1,
  setProjectVariant: (variant: number) => set({ projectVariant: variant }),
  legalVariant: 5,
  setLegalVariant: (variant: number) => set({ legalVariant: variant }),
  footerVariant: 1,
  setFooterVariant: (variant: number) => set({ footerVariant: variant }),
  leadershipVariant: 1,
  setLeadershipVariant: (variant: number) => set({ leadershipVariant: variant }),
  projectListingVariant: 1,
  setProjectListingVariant: (variant: number) => set({ projectListingVariant: variant }),
  separatorVariant: 1,
  setSeparatorVariant: (variant: number) => set({ separatorVariant: variant }),
  parallaxVariant: 1,
  setParallaxVariant: (variant: number) => set({ parallaxVariant: variant }),
}));
