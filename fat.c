#include <stdio.h>

int away(int num, int denom) {
    if (num % denom == 0) {
        return num / denom;
    }
    if (num % denom > 0) {
        return num / denom + 1;
    }
    return num / denom - 1;
}

int necklace(int pocket_size,int colors,int length,int beads_per_inch) {
    return ((((beads_per_inch * length) % colors) * away(away(beads_per_inch * length, colors), pocket_size))
            +
            ((colors - (beads_per_inch * length) % colors) * away((beads_per_inch * length) / colors, pocket_size)));
}


int main(void) {
    printf("%d", necklace(2, 4, 37, 2));
    return 0;
}