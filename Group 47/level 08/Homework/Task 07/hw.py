# 7. შექმენით ცვლადები P და Q, თითოეულს მიენიჭე True ან False. შემდეგ შექმენით ახალი ცვლადები:
# P_and_not_Q: ამ ცვლადში შეინახეთ True, თუ P არის True და Q არის False.
# not_P_and_Q: ამ ცვლადში შეინახეთ True, თუ P არის False და Q არის True.
# P_xor_Q: ამ ცვლადში შეინახეთ True, თუ ზუსტად ერთი P ან Q არის True თუ ორივე True-ა მაშინ ამ ცვლადში შეინახეთ False

P = False
Q = False
P_and_not_Q = P and not Q
not_P_and_Q = not P and Q
P_xor_Q = P != Q
print("P_and_not_Q:", P_and_not_Q)
print("not_P_and_Q:", not_P_and_Q)
print("P_xor_Q:", P_xor_Q)