export function extractAndRemoveHashtagsAndBrackets(content: string): { 
    title: string[], 
    categories: string[], 
    cleanedContent: string 
} {
    const title: string[] = [];
    const categories: string[] = [];

    // Utiliser une regex pour trouver les éléments entre ** **
    const hashtagRegex = /\*\*(.*?)\*\*/g;
    let cleanedContent = content;

    // Extraction des chaînes entre **
    let matchHashtags;
    while ((matchHashtags = hashtagRegex.exec(content)) !== null) {
        title.push(matchHashtags[1].trim());
        // Supprimer les éléments ** ** de la chaîne nettoyée
        cleanedContent = cleanedContent.replace(matchHashtags[0], '');
    }

    // Utiliser une regex pour trouver les listes entre []
    const bracketRegex = /\[(.*?)\]/g;
    let matchBrackets;
    while ((matchBrackets = bracketRegex.exec(content)) !== null) {
        // Extraire les éléments entre [] et les séparer par des virgules
        const items = matchBrackets[1].split(',').map(item => item.trim());
        categories.push(...items);
        // Supprimer les éléments [] de la chaîne nettoyée
        cleanedContent = cleanedContent.replace(matchBrackets[0], '');
    }

    // Retourner les chaînes extraites et le contenu nettoyé
    return { 
        title, 
        categories, 
        cleanedContent: cleanedContent.trim() 
    };
}