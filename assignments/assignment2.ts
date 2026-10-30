//Assignment-2 (Conditional Statements)
//A bank evaluates loan applicants based on the following criteria:


function loanEvalution(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {
    console.log("Loan Evaluation Result for: " + customerName);
    if (creditScore > 750) {
        console.log("Loan Approved");
    }
    else if (creditScore >= 650) {
        console.log("Loan can be considered,additional checks are performed");
        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40.0) {
                    console.log("Loan approved meets criteria");
                } else {
                    console.log("Loan deined: debt-to-income ratio is high ");
                }
            } else {
                console.log("Loan deined, customer is not employed");
            }
        }
        else {
            console.log("Loan deined, Income is less than required");
        }
    }
    else {
        console.log("Loan deined: credit score is too low");
    }
}
loanEvalution(
    "KETKI",
    650,
    60000,
    true,
    30.0

);