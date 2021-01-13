#include <ncurses.h>
#include <string.h>

// Initialize screen and options
void initcurses() {
    initscr();
    raw();
    keypad(stdscr, true);
    noecho();
}

// Print header
void printhead() {
    char text1[] = "Type any character and it will get printed bold and dimmed\n";
    char text2[] = "Press the 'end' key to exit\n\n";
    int row,col;

    getmaxyx(stdscr, row, col);
    mvaddstr(row/2, col/2-strlen(text1)/2, text1);
    mvaddstr(row/2+1, col/2-strlen(text2)/2, text2);
}

int main(int argc, char *argv[]) {
    initcurses();

    int exit = 0;
    int ch;

    printhead();

    while (exit == 0) {
        ch = getch();
        if (ch == KEY_END) exit = 1;
        else addch(ch | A_BOLD | A_DIM);
        refresh();
    }
    endwin();

    return 0;
}
