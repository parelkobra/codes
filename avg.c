#include <stdio.h>

int main(void) {
    int n = 0, total = 0, size = 0;
    scanf("%d", &n);

    while (n != 0) {
      total += n;
      size++;
      scanf("%d", &n);
    }

    if (size == 0) printf("%d\n", n);
    else printf("%.2f", (float) total / size);
}
