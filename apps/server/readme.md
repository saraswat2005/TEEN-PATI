# How Betting Works on Our Platform

## 1. Placing a Bet

### Step 1: Buy Wallet Coins

To place a bet, you’ll need to purchase in-app coins using real money. These coins will be stored in your wallet balance and can be used for betting.

**Example Conversion:**  
$1 = 100 coins  
Deposit $10 → Receive 1,000 coins

### Step 2: Select an Over/Under Bet

We provide live betting odds fetched from our sportsbook partner. You can choose between:

- **Over 2.5 goals** (Odds: 1.80)
- **Under 2.5 goals** (Odds: 2.00)

For example, if you stake 500 coins on Over 2.5 goals, your bet is recorded and sent to the sportsbook.

### Step 3: Your Bet is Placed

Once you place a bet, we securely send the details to our sportsbook API, including:

- Your User ID
- Event ID
- Bet Type (Over/Under)
- Odds & Stake

The sportsbook processes the bet, and now it’s time to wait for the game results.

---

## 2. After the Game

### Step 4: Game Results Arrive

When the game ends, the sportsbook API sends us the final result, such as:

```json
{
  "event_id": "123",
  "status": "finished",
  "final_score": "3-1",
  "winning_outcome": "over"
}
```

Since the final score is 3-1, the total goals exceed 2.5, meaning **"Over 2.5 goals"** is the winning bet.

### Step 5: Winnings Are Credited

If your bet wins, we calculate your payout using the formula:
**Winnings = Stake × Odds**

For example:
500 coins × 1.80 odds = **900 coins**  
Your updated wallet balance reflects your new total after winnings are added.

**Note:** We deduct a small commission from winnings (e.g., 5%).

- Winnings: 900 coins
- 5% Fee: 45 coins
- Final credited amount: **855 coins**

---

## 3. How We Handle Money & Profit

### Our Revenue Model

We do not take direct betting risks. Instead, we earn through:

- A **small commission per bet win** (e.g., 5%).
- **Withdrawal fees** when you cash out your coins.

### Handling Big Wins

Your winnings are funded by the sportsbook, so we don’t risk losses. We ensure liquidity for smooth withdrawals. If needed, we may set daily withdrawal limits (e.g., max $1,000/day).

---

## 4. Withdraw Your Winnings

### Step 6: Cashing Out

You can withdraw your winnings by converting coins back into real money.

**Example Conversion:**  
1,000 coins = $10

**Withdrawal Options:**

- Bank Transfer
- UPI
- Crypto
- PayPal

A **small withdrawal fee (e.g., 2%)** applies.

---

## 5. What If You Win Big?

Since we act as an intermediary, the sportsbook funds your winnings. Our role is to:

- Process your withdrawals.
- Keep a commission.
- Ensure a smooth payout experience.

We may set withdrawal limits to maintain liquidity, ensuring all users get paid promptly.

---

## 6. Summary of the Betting Process

### How It Works:

1. **Buy Coins** – Add funds to your wallet.
2. **Place a Bet** – Select Over/Under, and we send the bet to the sportsbook.
3. **Game Ends** – The sportsbook sends us results.
4. **Win or Lose** – Winnings are credited to your wallet.
5. **Withdraw Anytime** – Cash out your winnings (fees apply).

### Our Role:

- We **do not take risk** – Bets are processed via our sportsbook API.
- We **earn from commissions** – A small fee per bet win & withdrawal.
- We **manage your wallet** – Securely store and process deposits & withdrawals.

---

## 7. What’s Coming Next

We are constantly improving our platform! Features in development:
✅ **Wallet System** – Easily deposit, store, and withdraw coins.  
✅ **Betting Interface** – View live Over/Under odds and place bets effortlessly.  
✅ **API Integration** – Seamless processing of bets and results.  
✅ **Fast Payouts** – Quick and secure withdrawals.

Stay tuned for more updates, and happy betting!

# How Betting Works on Our Platform

## 1. Placing a Bet

### Step 1: Buy Wallet Coins

To place a bet, you’ll need to purchase in-app coins using real money. These coins will be stored in your wallet balance and can be used for betting.

**Example Conversion:**  
$1 = 100 coins  
Deposit $10 → Receive 1,000 coins

### Step 2: Select an Over/Under Bet

We provide live betting odds fetched from our sportsbook partner. You can choose between:

- **Over 2.5 goals** (Odds: 1.80)
- **Under 2.5 goals** (Odds: 2.00)

For example, if you stake 500 coins on Over 2.5 goals, your bet is recorded and sent to the sportsbook.

### Step 3: Your Bet is Placed

Once you place a bet, we securely send the details to our sportsbook API, including:

- Your User ID
- Event ID
- Bet Type (Over/Under)
- Odds & Stake

The sportsbook processes the bet, and now it’s time to wait for the game results.

---

## 2. After the Game

### Step 4: Game Results Arrive

When the game ends, the sportsbook API sends us the final result, such as:

```json
{
  "event_id": "123",
  "status": "finished",
  "final_score": "3-1",
  "winning_outcome": "over"
}
```

Since the final score is 3-1, the total goals exceed 2.5, meaning **"Over 2.5 goals"** is the winning bet.

### Step 5: Winnings Are Credited

If your bet wins, we calculate your payout using the formula:
**Winnings = Stake × Odds**

For example:
500 coins × 1.80 odds = **900 coins**  
Your updated wallet balance reflects your new total after winnings are added.

**Note:** We deduct a small commission from winnings (e.g., 5%).

- Winnings: 900 coins
- 5% Fee: 45 coins
- Final credited amount: **855 coins**

---

## 3. How We Handle Money & Profit

### Our Revenue Model

We do not take direct betting risks. Instead, we earn through:

- A **small commission per bet win** (e.g., 5%).
- **Withdrawal fees** when you cash out your coins.

### Handling Big Wins

Your winnings are funded by the sportsbook, so we don’t risk losses. We ensure liquidity for smooth withdrawals. If needed, we may set daily withdrawal limits (e.g., max $1,000/day).

---

## 4. Withdraw Your Winnings

### Step 6: Cashing Out

You can withdraw your winnings by converting coins back into real money.

**Example Conversion:**  
1,000 coins = $10

**Withdrawal Options:**

- Bank Transfer
- UPI
- Crypto
- PayPal

A **small withdrawal fee (e.g., 2%)** applies.

---

## 5. What If You Win Big?

Since we act as an intermediary, the sportsbook funds your winnings. Our role is to:

- Process your withdrawals.
- Keep a commission.
- Ensure a smooth payout experience.

We may set withdrawal limits to maintain liquidity, ensuring all users get paid promptly.

---

## 6. Summary of the Betting Process

### How It Works:

1. **Buy Coins** – Add funds to your wallet.
2. **Place a Bet** – Select Over/Under, and we send the bet to the sportsbook.
3. **Game Ends** – The sportsbook sends us results.
4. **Win or Lose** – Winnings are credited to your wallet.
5. **Withdraw Anytime** – Cash out your winnings (fees apply).

### Our Role:

- We **do not take risk** – Bets are processed via our sportsbook API.
- We **earn from commissions** – A small fee per bet win & withdrawal.
- We **manage your wallet** – Securely store and process deposits & withdrawals.

---

## 7. What’s Coming Next

We are constantly improving our platform! Features in development:
✅ **Wallet System** – Easily deposit, store, and withdraw coins.  
✅ **Betting Interface** – View live Over/Under odds and place bets effortlessly.  
✅ **API Integration** – Seamless processing of bets and results.  
✅ **Fast Payouts** – Quick and secure withdrawals.

Stay tuned for more updates, and happy betting!
