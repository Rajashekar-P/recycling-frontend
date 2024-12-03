"use client";

import React, { useCallback, useEffect, useState } from "react";

import styles from "@/styles/dashboard/users.module.scss";
import { getAllUsersByPage, getPageSize } from "@/services/user/UserService";
import UserCard from "@/components/dashboard/user-card";
import { useSearchParams } from "next/navigation";
import Button from "@/components/input/button";
import { useUserContext } from "@/context/user/UserContext";
import { UserRole } from "@/context/user/User";
import { useRouter } from "next/navigation";

type Props = {};

function UsersPage({ }: Props) {
    const params = useSearchParams();
    const router = useRouter();
    const { getUserRole } = useUserContext();

    const [page, setPage] = useState(1);
    const [userCards, setUserCards] = useState<JSX.Element[]>([]);
    const [maxPages, setMaxPages] = useState(1);

    // Fetch user cards for the current page
    const fetchUserCards = useCallback(async () => {
        try {
            const users = await getAllUsersByPage(page, 15);
            setUserCards(users.map(user => <UserCard key={user.id} user={user} />));
        } catch (error) {
            console.error("Error fetching user cards:", error);
        }
    }, [page]);

    // Fetch the maximum number of pages
    const fetchMaxPages = useCallback(async () => {
        try {
            const pages = await getPageSize(15);
            setMaxPages(pages);
        } catch (error) {
            console.error("Error fetching max pages:", error);
        }
    }, []);

    // Update page state from URL parameters
    useEffect(() => {
        const pageParam = params.get("page");
        if (pageParam) {
            const pageNumber = Number(pageParam);
            if (!Number.isNaN(pageNumber)) {
                setPage(pageNumber);
            }
        }
    }, [params]);

    // Redirect if the user does not have permission
    useEffect(() => {
        if (getUserRole() === UserRole.USER) {
            router.push("/");
        }
    }, [getUserRole, router]);

    // Fetch data whenever the page changes
    useEffect(() => {
        fetchUserCards();
    }, [page, fetchUserCards]);

    // Fetch the maximum number of pages on mount
    useEffect(() => {
        fetchMaxPages();
    }, [fetchMaxPages]);

    return (
        <section className={styles["users"]}>
            <h1 className={styles["users__header"]}>Registered Users</h1>
            <div className={styles["users__controls"]}>
                {page > 1 && (
                    <Button clickCallback={() => setPage(prev => prev - 1)}>
                        Previous Page
                    </Button>
                )}
                <span className={styles["users__page"]}>
                    {page} / {maxPages}
                </span>
                {page < maxPages && (
                    <Button clickCallback={() => setPage(prev => prev + 1)}>
                        Next Page
                    </Button>
                )}
            </div>
            <div className={styles["users__list"]}>{userCards}</div>
        </section>
    );
}

export default UsersPage;
