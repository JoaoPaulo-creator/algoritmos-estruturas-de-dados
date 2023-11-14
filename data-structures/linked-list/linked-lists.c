/*
Linked lists podem ser implementadas com head ou sem head

vantagens de se usar um head numa linked list:

- Nao precisa validar se a lista esta vazia
- Nao precisa usar de um ponteiro para apontar para outro ponteiro

*/

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *createNode(int data) {
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        perror("Falha ao tentar alocar memoria");
        exit(EXIT_FAILURE);
    }

    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}

void insertAtBeginning(struct Node **head, int data) {
    struct Node *newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}

void freeList(struct Node *head) {
    struct Node *current = head;
    while (current != NULL) {
        struct Node *next = current->next;
        free(current);
        current = next;
    }
}

void printList(struct Node *head) {
    struct Node *current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    // Initialize an empty linked list
    struct Node *head = NULL;

    // Insert elements at the beginning of the linked list
    insertAtBeginning(&head, 24);
    insertAtBeginning(&head, 11);
    insertAtBeginning(&head, 9);
    insertAtBeginning(&head, 8);
    insertAtBeginning(&head, -1);
    insertAtBeginning(&head, 7);
    insertAtBeginning(&head, 6);
    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 2);
    insertAtBeginning(&head, 1);

    // Print the linked list
    printf("Linked List: ");
    printList(head);

    // Free the memory allocated for the linked list
    freeList(head);

    return 0;
}
