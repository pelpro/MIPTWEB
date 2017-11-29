import "unicode"
func RemoveEven(mass []int) []int {
odd := make([]int, 0)
for _, number := range mass {
if number % 2 == 1 {
odd = append(odd, number)
}
}
return odd
}

func PowerGenerator(a int) func() int {
powern := 1
return func() int {
powern *= a
return powern
}
}

func DifferentWordsCount(str string) int {
maps := make(map[string]bool)
countw := 0
word := ""
for _, sym := range (x + " ") {
if unicode.IsLetter(sym) {
word += string(unicode.ToLower(sym))
}
else if word != "" {
if !maps[word] {
countw += 1
}
maps[word] = true
word = ""
}
}
return countw
}
