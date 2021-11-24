export enum GoodPiece {
    FRODO,
    SAM,
    PIPPIN,
    MERRY,
    GANDALF,
    ARAGORN,
    LEGOLAS,
    GIMLI,
    BOROMIR
}

function goodStrength(piece: GoodPiece) {
    switch (piece) {        
        case GoodPiece.FRODO:   return 1
        case GoodPiece.SAM:     return 2
        case GoodPiece.PIPPIN:  return 1
        case GoodPiece.MERRY:   return 2
        case GoodPiece.GANDALF: return 5
        case GoodPiece.ARAGORN: return 4
        case GoodPiece.LEGOLAS: return 3
        case GoodPiece.GIMLI:   return 3
        case GoodPiece.BOROMIR: return 0
    }
}

export enum DarkPiece {
    BALROG,
    SHELOB,
    WITCH_KING,
    FLYING_NAZGUL,
    BLACK_RIDER,
    SARUMAN,
    ORCS,
    WARG,
    TROLL
}