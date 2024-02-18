## homework
# Домашня робота до лекції 8

# Обчислити ширину елементу .box

# .box{
#   width: 300px;
#   padding: 10px;
#   border: dashed 2px green;
# }
#
# Ширина елементу дорівнює 300px, відступи 10px с кожній сторони це (10 * 2) та рамка 2px (2 * 2),
# то буде 300px + 10px * 2 + 2px * 2 = 324px

# Обчислити ширину і висоту елемету .first-box

# .first-box{
#   width: 200px;
#   height: 100px;
#   border: 8px; solid blue
#   padding: 20px;
#   background: yellow;
# }
#
# Ширина елементу дорівнює 200px, рамка 8px * 2, та відступи 20px * 2
# тож 200px + 8px * 2 + 20px * 2 = 256px
#
# Висота елементу дорівнює 100px, рамка 8px * 2, відступи 20px * 2
# виходить 100px + 8px * 2 + 20px * 2 = 156px

# Обчислити ширину і висоту елементу .second-box

# .second-box{
#   width: 200px;
#   height: 100px;
#   border: 8px solid blue;
#   background: yellow;
# }
#
# Ширина дорівнює 200px, рамка 8px * 2   
# то 200px + 8px * 2 = 216px
#
# Висота 100px, рамка 8px * 2
# то 100px + 8px * 2 = 116px

# Обчислити ширину елементу div

# div{
#  box-sizing:content-box;
#  width: 200px;
#  border: 8px solid blue;
#  padding: 20px;
#  background: yellow;
# }
# 
# Ширина елементу буде разом з шириною контенту 200px, рамка 8px * 2, відступи 20px * 2,
# то це буде 200px + 8px * 2 + 20px * 2 = 256px

# Обчислити ширину контенту елемента div

# div{
#  box-sizing:content-box;
#  width: 200px;
#  border: 8px solid blue;
#  padding: 20px;
#  background: yellow;
# } 
#
# Щоб вичислити ширину контенту єлемента, треба від фактичної ширини відняти суму відступів ш рамки
# Ширина елементу 200px, рамка 8px * 2, відступи 20px * 2
# виходить 200px - (8px * 2 + 20px * 2) = 144px
#
