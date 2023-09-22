export const calculateRewardsPoints = (transactions) => {
    transactions.totalPoints = 0;
    transactions.forEach(transaction => {
        let forOverOneHundred = 0;
        let forOverFifty = 0;
        let cleanTotal = Math.floor(transaction.total);

        if( transaction.total > 100){
            forOverOneHundred = (cleanTotal - 100) * 2;
        }

        if( transaction.total > 50){
            forOverFifty = (cleanTotal - 50);
        }

        transaction.points = forOverOneHundred + forOverFifty;
        transactions.totalPoints = transactions.totalPoints + (forOverOneHundred + forOverFifty);
    });

    return transactions;
}
