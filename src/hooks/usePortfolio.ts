import data from '../data/portfolio.json';
import { PortfolioData } from '../types/portfolio';

export function usePortfolio(): PortfolioData {
  return data as PortfolioData;
}
