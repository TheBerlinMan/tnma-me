// Types for Chess.com API response
export interface ChessRating {
  rating: number;
  date: number;
  rd?: number;
  game?: string;
}

export interface ChessStats {
  chess_rapid?: {
    last: ChessRating;
    best: ChessRating;
  };
  chess_blitz?: {
    last: ChessRating;
    best: ChessRating;
  };
}

/**
 * Fetches rapid and blitz chess statistics for pigeonmania from Chess.com API
 * @returns Promise<ChessStats> - The player's rapid and blitz chess statistics
 */
export async function getChessStats(): Promise<ChessStats> {
  try {
    const response = await fetch('https://api.chess.com/pub/player/pigeonmania/stats');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ChessStats = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chess stats:', error);
    throw error;
  }
}

/**
 * Helper function to format a Unix timestamp to a readable date
 * @param timestamp - Unix timestamp
 * @returns string - Formatted date string
 */
export function formatChessDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}