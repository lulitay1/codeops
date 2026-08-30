export const totalByType = (trans, type) => 
    trans.filter(t => t.type === type) 
    .reduce((sum, { amount }) => sum + amount, 0); 