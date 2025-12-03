Bogosort. Den eneste sorteringsalgoritme som teoretisk set kan sortere enhver liste i 1 operation!

https://en.wikipedia.org/wiki/Bogosort

Sorteret

tjek om data er sorteret.
hvis ja: super, så er vi færdige :)
hvis nej:
bland data tilfældigt og tilbage til trin 1

Den har en tidskompleksitet af O(n!), hvilket gør at det ikke er nogen super sorteringsalgorithme medmindre man har en meget lille set data som skal sorteres, eller man føler sig meget heldig
Den har den tidskompleksitet, da den gætter tilfeldigt, og ikke "husker" noget, eller tager noget som helst fremskridt. Den kan endda ramme (og tjekke) den samme tilstand flere gange, hvilket gør at den i teorien kan køre for evigt. Men det er ikke et stor proble mi forhold til at man kun skal op i 50'erne før at der i gennemsnit skal være flere operationer end der er atomer i hele universet.

God video hvor bogosort bla. blliver forklaret: https://www.youtube.com/watch?v=RGuJga2Gl_k