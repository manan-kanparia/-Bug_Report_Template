function calculateFee() {
    const baseFee = Number(document.getElementById("baseFee").value);
    const labFee = Number(document.getElementById("labFee").value);
    const semesters = Number(document.getElementById("semesters").value);
    const scholarship = document.getElementById("scholarship").value;
    const subtotal = baseFee + labFee;
    const rate = getRate(scholarship);
    const discount = calculateDiscount(subtotal, rate);
    const adminCharge = subtotal * 0.05;
    const payable = calculateTotal(subtotal, discount, adminCharge);
    document.getElementById("result").textContent = "Subtotal: ₹" + subtotal + " | Discount: ₹" + discount + " | Administration: ₹" + adminCharge + " | Payable: ₹" + payable;
    document.getElementById("breakdown").textContent = buildBreakdown(payable, semesters);
}

function calculateDiscount(amount, percentage) {
    return amount * percentage / 100;
}

function getRate(type) {
    if (type === "Merit") {
        return 20;
    } else if (type === "Sports") {
        return 10;
    } else {
        return 0;
    }
}

function calculateTotal(subtotal, discount, adminCharge) {
    return subtotal - discount + adminCharge;
}

function buildBreakdown(payable, count) {
    let summary = "";

    for (let semester = 1; semester <= count; semester++) {
        summary += "Semester " + semester +
                   ": ₹" + payable +
                   " | Cumulative: ₹" + (payable * semester) +
                   "\n";
    }

    return summary;
}
